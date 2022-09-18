<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\Customers::factory(500)->create();

        \App\Models\User::create([
            'name' => 'Ahmad',
            'email' => 'beniepay@gmail.com',
            "password" => "123123123",
            "user_type" => "admin",
        ]);
    }
}
