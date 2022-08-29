<?php

namespace Database\Seeders;

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 100; $i++) {
            \App\Models\Customers::create([
                "name" => Str::random(10),
                "phone" => "08217441607" + $i,
                "whatsapp" => "628217441607" + $i,
            ]);
        }
    }
}
