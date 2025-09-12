import React, { useEffect, useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { useForm, Head, usePage } from '@inertiajs/react';
import Input from '@/Components/Input';
import TextArea from '@/Components/TextArea';
import SelectMulti from '@/Components/SelectMulti';
import Button from '@/Components/Button';
import Breadcumb from '@/Components/Breadcumb';
import accessoriesOptions from './data/accessoriesOptions';
import categoryOptions from './data/categoriesOptios';
import typiesOptions from './data/typiesOptions';
import { format } from 'date-fns';
import Modal from '@/Components/Modal';

export default function ReceiptAdd() {
  const { customers, auto_number, user } = usePage().props;

  // Initial item structure
  const initialItem = {
    category: 'printer',
    brand: 'epson',
    model: '',
    sn: '',
    demmage: '',
    accessories: [],
    handle_by: '',
  };

  const { data, setData, post, processing, errors } = useForm({
    receipt_number: auto_number,
    delivery_date: format(new Date(), 'yyyy-MM-dd'),
    customer_id: '',
    notes: '',
    items: [initialItem],
  });

  // Handle change for main form fields
  const handleChange = (e) => {
    setData(e.target.name, e.target.type === 'checkbox' ? e.target.checked : e.target.value);
  };

  // Handle change for item fields
  const handleItemChange = (index, field, value) => {
    const newItems = [...data.items];
    newItems[index][field] = value;
    setData('items', newItems);
  };

  // Handle change for accessories (kelengkapan)
  const handleAccessoriesChange = (itemIndex, selectedOptions) => {
    const newItems = [...data.items];
    newItems[itemIndex].accessories = selectedOptions || [];
    setData('items', newItems);
  };

  // Add new item
  const addItem = () => {
    setData('items', [...data.items, { ...initialItem }]);
  };

  // Remove item
  const removeItem = (index) => {
    if (data.items.length > 1) {
      const newItems = [...data.items];
      newItems.splice(index, 1);
      setData('items', newItems);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitData = {
      ...data,
      items: data.items.map((item) => ({
        ...item,
        accessories: item.accessories?.map((acc) => acc.label).join(', ') || '',
      })),
    };

    setData(submitData);

    post(route('receipts.store'), {
      onSuccess: () => {
        clear();
      },
    });
  };

  return (
    <AdminLayout>
      <Head title="Tambah TTB Baru" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">
            <i className="bi bi-clipboard-plus-fill pr-3"></i>
            Tambah Tanda Terima
          </h1>
          <Breadcumb
            data={[
              { url: '/dashboard', label: 'Dashboard' },
              { url: '/receipts', label: 'Daftar tanda Terima' },
              { url: '#', label: 'Tanda Terima Baru' },
            ]}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="bg-white rounded-lg shadow-lg border-2 border-neutral-300 p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Data Tanda Terima</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            <Input
              label="Nomor TTB"
              name="receipt_number"
              value={data.receipt_number}
              disabled
              handleChange={handleChange}
              error={errors.receipt_number}
            />

            <Input
              type="date"
              label="Tanggal"
              required
              name="delivery_date"
              value={data.delivery_date}
              handleChange={handleChange}
              error={errors.delivery_date}
            />
            <SelectMulti
              name={'customer_id'}
              onHandleChange={(e) => setData('customer_id', e.value)}
              label={'Pelanggan'}
              required
              error={errors.customer_id}
              closeMenuOnSelect
              option={customers}
            />
          </div>

          <TextArea name={'notes'} label="Catatan" handleChange={handleChange} />
        </div>

        {/* Items Section */}
        <div className="bg-neutral-50 rounded-lg shadow-lg border-2 border-neutral-300 px-6 py-4 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Data Barang</h2>
            <button type="button" onClick={addItem} className="btn btn-primary btn-sm">
              <i className="bi bi-plus-circle mr-1"></i>
              Tambah Barang
            </button>
          </div>

          {data.items.map((item, itemIndex) => (
            <div
              className="bg-neutral-50 border rounded-lg border-neutral-300 mb-4 px-6 py-4"
              key={itemIndex}
            >
              <div className="font-semibold flex flex-row justify-between">
                Barang {itemIndex + 1}
                <button
                  type="button"
                  onClick={(e) => {
                    removeItem(itemIndex);
                  }}
                  className="btn btn-warning btn-xs"
                >
                  <i className="bi bi-trash"></i> Hapus Barang
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
                <SelectMulti
                  defaultValue={categoryOptions[0]}
                  name={'category'}
                  label={'Kategori'}
                  closeMenuOnSelect
                  onHandleChange={(selected) =>
                    handleItemChange(itemIndex, 'category', selected.value)
                  }
                  required
                  option={categoryOptions}
                />

                <SelectMulti
                  defaultValue={typiesOptions[0]}
                  name={'brand'}
                  required
                  onHandleChange={(selected) =>
                    handleItemChange(itemIndex, 'brand', selected.value)
                  }
                  label={'Merek'}
                  closeMenuOnSelect
                  option={typiesOptions}
                />

                <Input
                  label="Model"
                  name={'model'}
                  required
                  placeHolder="Cth: L3110"
                  value={item.model}
                  handleChange={(e) => handleItemChange(itemIndex, 'model', e.target.value)}
                  error={errors[`items.${itemIndex}.model`]}
                />

                <Input
                  label="Serial Number"
                  name={'sn'}
                  required
                  value={item.sn}
                  handleChange={(e) => handleItemChange(itemIndex, 'sn', e.target.value)}
                  error={errors[`items.${itemIndex}.sn`]}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <SelectMulti
                  label={'Teknisi'}
                  option={user}
                  required
                  closeMenuOnSelect
                  error={errors[`items.${itemIndex}.handle_by`]}
                  placeholder="Pilih Teknisi"
                  onHandleChange={(selected) =>
                    handleItemChange(itemIndex, 'handle_by', selected.value)
                  }
                />
                <SelectMulti
                  label={'Aksesoris'}
                  option={accessoriesOptions}
                  onHandleChange={(selected) => handleAccessoriesChange(itemIndex, selected)}
                  isMulti={true}
                  placeholder="Pilih Aksesoris"
                  value={item.accessories}
                />
              </div>

              <TextArea
                label="Deskripsi Kerusakan"
                placeHolder="Printhead mampet"
                required
                value={item.demmage}
                handleChange={(e) => handleItemChange(itemIndex, 'demmage', e.target.value)}
                error={errors[`items.${itemIndex}.demmage`]}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-3">
          <button type="button" onClick={() => window.history.back()} className="btn btn-ghost">
            Batal
          </button>
          <Button type="submit" className="btn btn-primary" processing={processing}>
            Simpan Tanda Terima
          </Button>
        </div>

        <Modal></Modal>
      </form>
    </AdminLayout>
  );
}
