<?php

use App\CategoryLevel1;
use Illuminate\Database\Seeder;

class Category1TableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Vaciar la tabla.
        CategoryLevel1::truncate();

        CategoryLevel1::create([
            'name'=> 'Artes plasticas',
        ]);
        CategoryLevel1::create([
            'name'=> 'Artes literarias y académicos',
        ]);
        CategoryLevel1::create([
            'name'=> 'Artes musicales',
        ]);
        CategoryLevel1::create([
            'name'=> 'Artes escénicas',
        ]);
        CategoryLevel1::create([
            'name'=> 'Artes visuales',
        ]);
        CategoryLevel1::create([
            'name'=> 'Artesanías',
        ]);

//        $faker = \Faker\Factory::create();
//        // Crear categorías ficticias en la tabla
//        for($i = 0; $i < 10; $i++) {
//            CategoryLevel1::create([
//
//                'name' => $faker->word,
//
//            ]);
//        }
    }
}
