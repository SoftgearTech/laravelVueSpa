<?php

use Illuminate\Database\Seeder;
use App\User;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Alamgir',
            'email' => 'alamgir@softgear.net',
            'password' => bcrypt('softgear'),
            'role' => 'administrator'
        ]);
    }
}
