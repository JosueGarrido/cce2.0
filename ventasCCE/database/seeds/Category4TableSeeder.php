<?php

use App\CategoryLevel4;
use Illuminate\Database\Seeder;

class Category4TableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Vaciar la tabla.
        CategoryLevel4::truncate();


        CategoryLevel4::create([
            'name'=> 'Fieltro',
            'category3_id'=> '1',
        ]);
        CategoryLevel4::create([
            'name'=> 'Otros',
            'category3_id'=> '2',
        ]);

    /*    $faker = \Faker\Factory::create();
        // Crear categorías ficticias en la tabla
        for($i = 0; $i < 50; $i++) {
            CategoryLevel4::create([

                'name' => $faker->word,

            ]);
        }  */

    }
}
