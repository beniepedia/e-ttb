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
            $table->string("transaction_token", 36)->nullable();
            $table->string("transaction_url")->nullable();
            $table->json("payload")->nullable();
            $table->dateTime("transaction_time");
            $table->string("transaction_status", 20)->default("pending");
            $table->$table->timestamps();
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
