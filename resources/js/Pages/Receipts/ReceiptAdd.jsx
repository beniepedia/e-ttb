import React, { useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { useForm, Head } from '@inertiajs/react';
import Input from '@/Components/Input';
import TextArea from '@/Components/TextArea';
import SelectMulti from '@/Components/SelectMulti';
import Button from '@/Components/Button';
import Select from '@/Components/Select';

export default function ReceiptAdd({ customers, auth, user, auto_number }) {
  // Initial item structure
  const initialItem = {
    category: 'laptop',
    brand: '',
    model: '',
    damage_description: '',
    accessories: [],
  };

  const { data, setData, post, processing, errors } = useForm({
    receipt_number: auto_number,
    customer_id: '',
    kelengkapan: [],
    kerusakan: '',
    description: '',
    category: 'laptop',
    barang: '',
    handle_by: '',
    photo: null,
    repair_notes: '',
    items: [initialItem],
  });

  // Category options
  const categoryOptions = [
    { label: 'Laptop', value: 'laptop' },
    { label: 'Printer', value: 'printer' },
    { label: 'Cartridge', value: 'cartridge' },
    { label: 'Toner', value: 'toner' },
    { label: 'Komputer', value: 'komputer' },
    { label: 'Monitor', value: 'monitor' },
    { label: 'Scanner', value: 'scanner' },
    { label: 'Lainnya', value: 'lainnya' },
  ];

  // Accessories options for multi-select
  const accessoriesOptions = [
    { label: 'Kabel Listrik', value: 'kabel_listrik' },
    { label: 'Kabel USB', value: 'kabel_usb' },
    { label: 'Kotak', value: 'kotak' },
    { label: 'Charger', value: 'charger' },
    { label: 'Buku Manual', value: 'buku_manual' },
    { label: 'CD/DVD', value: 'cd_dvd' },
    { label: 'Mouse', value: 'mouse' },
    { label: 'Keyboard', value: 'keyboard' },
    { label: 'Webcam', value: 'webcam' },
    { label: 'Earphone/Headphone', value: 'earphone_headphone' },
  ];

  // State for accordion
  const [openItems, setOpenItems] = useState([0]);

  // Toggle accordion item
  const toggleAccordion = (index) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((item) => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  // Handle change for main form fields
  const handleChange = (e) => {
    setData(e.target.name, e.target.type === 'checkbox' ? e.target.checked : e.target.value);
  };

  // Handle change for customer selection
  const handleCustomerChange = (selectedOption) => {
    setData('customer_id', selectedOption ? selectedOption.value : '');
  };

  // Handle change for category selection
  const handleCategoryChange = (selectedOption) => {
    setData('category', selectedOption ? selectedOption.value : 'laptop');
  };

  // Handle change for technician selection
  const handleTechnicianChange = (selectedOption) => {
    setData('handle_by', selectedOption ? selectedOption.value : '');
  };

  // Handle change for item fields
  const handleItemChange = (index, field, value) => {
    const newItems = [...data.items];
    newItems[index][field] = value;
    setData('items', newItems);

    // Update the main form fields to match the first item for compatibility
    if (index === 0) {
      if (field === 'category') {
        setData('category', value);
      } else if (field === 'brand' || field === 'model') {
        setData('barang', `${newItems[0].brand} ${newItems[0].model}`.trim());
      } else if (field === 'damage_description') {
        setData('kerusakan', value);
      }
    }
  };

  // Handle change for accessories (kelengkapan)
  const handleAccessoriesChange = (itemIndex, selectedOptions) => {
    const newItems = [...data.items];
    newItems[itemIndex].accessories = selectedOptions || [];
    setData('items', newItems);

    // Update the main kelengkapan field to match the first item's accessories
    if (itemIndex === 0) {
      setData('kelengkapan', selectedOptions || []);
    }
  };

  // Add new item
  const addItem = () => {
    const newIndex = data.items.length;
    setData('items', [...data.items, { ...initialItem }]);
    // Open the new item by default
    setOpenItems([...openItems, newIndex]);
  };

  // Remove item
  const removeItem = (index) => {
    if (data.items.length > 1) {
      const newItems = [...data.items];
      newItems.splice(index, 1);
      setData('items', newItems);

      // Update open items
      const newOpenItems = openItems
        .filter((item) => item !== index)
        .map((item) => (item > index ? item - 1 : item));
      setOpenItems(newOpenItems);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare data for submission
    const submitData = {
      ...data,
      kelengkapan: data.items[0]?.accessories?.map((acc) => acc.label).join(', ') || [],
    };

    post(route('receipts.store'), {
      data: submitData,
      preserveScroll: true,
      replace: true,
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
          <h6 className="text-neutral-500">Tambah tanda terima barang baru</h6>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Data Tanda Terima</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <Input
                label="Nomor TTB"
                name="receipt_number"
                value={data.receipt_number}
                disabled
                handleChange={handleChange}
                error={errors.receipt_number}
              />
            </div>

            <div>
              <label className="fieldset-legend">
                Customer <span className="text-error">*</span>
              </label>
              <SelectMulti
                option={customers}
                onHandleChange={handleCustomerChange}
                error={errors.customer_id}
                isMulti={false}
                placeholder="Pilih Pelanggan"
              />
              {errors.customer_id && <div className="label text-error">{errors.customer_id}</div>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="fieldset-legend">Teknisi yang Menangani</label>
              <SelectMulti
                option={user}
                onHandleChange={handleTechnicianChange}
                error={errors.handle_by}
                isMulti={false}
                placeholder="Pilih Teknisi"
              />
              {errors.handle_by && <div className="label text-error">{errors.handle_by}</div>}
            </div>

            <div>
              <TextArea
                label="Catatan Teknisi"
                name="repair_notes"
                value={data.repair_notes}
                handleChange={handleChange}
                error={errors.repair_notes}
              />
            </div>
          </div>
        </div>

        {/* Items Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Data Barang</h2>
            <button type="button" onClick={addItem} className="btn btn-primary btn-sm">
              <i className="bi bi-plus-circle mr-1"></i>
              Tambah Barang
            </button>
          </div>

          {data.items.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className="collapse collapse-plus bg-base-100 border border-base-300 mb-4"
            >
              {/* Accordion Header */}
              <input
                type="checkbox"
                className="peer"
                checked={openItems.includes(itemIndex)}
                onChange={() => toggleAccordion(itemIndex)}
              />
              <div className="collapse-title font-medium flex justify-between items-center">
                <div>
                  Barang {itemIndex + 1}: {item.brand} {item.model || ''}
                </div>
                {data.items.length > 1 && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeItem(itemIndex);
                    }}
                    className="btn btn-error btn-xs"
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                )}
              </div>

              {/* Accordion Content */}
              <div className="collapse-content">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="fieldset-legend">
                      Kategori <span className="text-error">*</span>
                    </label>
                    <select
                      value={item.category}
                      onChange={(e) => handleItemChange(itemIndex, 'category', e.target.value)}
                      className="select w-full focus:outline-none focus:border-2 focus:border-primary"
                    >
                      {categoryOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Input
                      label="Merek"
                      value={item.brand}
                      handleChange={(e) => handleItemChange(itemIndex, 'brand', e.target.value)}
                      error={errors[`items.${itemIndex}.brand`] || errors.barang}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Input
                      label="Model"
                      value={item.model}
                      handleChange={(e) => handleItemChange(itemIndex, 'model', e.target.value)}
                      error={errors[`items.${itemIndex}.model`] || errors.barang}
                    />
                  </div>

                  <div>
                    <TextArea
                      label="Deskripsi Kerusakan"
                      value={item.damage_description}
                      handleChange={(e) =>
                        handleItemChange(itemIndex, 'damage_description', e.target.value)
                      }
                      error={errors[`items.${itemIndex}.damage_description`] || errors.kerusakan}
                    />
                  </div>
                </div>

                {/* Accessories Section (Kelengkapan) */}
                <div className="mt-4">
                  <label className="fieldset-legend">Kelengkapan</label>
                  <SelectMulti
                    option={accessoriesOptions}
                    onHandleChange={(selected) => handleAccessoriesChange(itemIndex, selected)}
                    isMulti={true}
                    placeholder="Pilih Kelengkapan"
                    value={item.accessories}
                  />
                </div>
              </div>
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
      </form>
    </AdminLayout>
  );
}
