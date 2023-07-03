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
        Schema::create('transactions', function (Blueprint $table) {
            $table->uuid("id")->primary();
            $table->string("invoice_number");
            $table->foreignId("receipt_id")->constrained()->cascadeOnUpdate()->restrictOnDelete();
            $table->decimal("amount", 10, 2);
            $table->json("payload")->nullable();
            $table->string("expired_time", 20);
            $table->string("transaction_status", 20)->default("UNPAID");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transactions');
    }
};
