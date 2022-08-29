<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('receipts', function (Blueprint $table) {
            $table->id();
            $table->string('receipt_code')->unique();
            $table->string('receipt_number');
            $table->foreignId('customer_id')->constrained('customers')->onDelete('cascade');
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->dateTime('delivery_date')->useCurrent();
            $table->dateTime('pickup_date')->nullable();
            $table->string('status')->default('pending'); //comment('0:pending,1:berhasil,2:gagal,3:proses')
            $table->text('kerusakan');
            $table->json('kelengkapan')->nullable();
            $table->string('category');
            $table->string('barang');
            $table->string("repair")->nullable();
            $table->double('cost')->default(0);
            $table->text('description')->nullable();
            $table->boolean('isTaken')->default(0);
            $table->string('image')->default('images/assets/no_image.jpg');
            $table->string('handle_by')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('create_receipt_table');
    }
};
