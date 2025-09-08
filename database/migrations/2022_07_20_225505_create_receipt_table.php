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
            $table->string('receipt_number');
            $table->foreignId('customer_id')->constrained('customers')->onDelete('cascade');
            $table->foreignId('created_by')->constrained('users')->onDelete('cascade'); // pembuat TTB
            $table->dateTime('delivery_date')->useCurrent();
            $table->dateTime('pickup_date')->nullable();
            $table->string("total_unit")->nullable();
            $table->double('total_amount')->default(0);
            $table->text('notes')->nullable();
            $table->boolean('isTaken')->default(0);
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
        // Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('create_receipt_table');
        // Schema::enableForeignKeyConstraints();
    }
};
