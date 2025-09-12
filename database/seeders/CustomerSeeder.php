<?php

namespace Database\Seeders;

use App\Models\Customers;
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
        $faker = \Faker\Factory::create('id_ID'); // lokal Indonesia

        for ($i = 0; $i < 500; $i++) {
            Customers::create([
                "name"     => $faker->name,
                "phone"    => $faker->phoneNumber,
                "whatsapp" => "62" . substr(preg_replace('/\D/', '', $faker->phoneNumber), 1),
            ]);
        }
    }
}
