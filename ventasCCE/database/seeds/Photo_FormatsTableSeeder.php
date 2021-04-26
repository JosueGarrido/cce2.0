<?php

use App\PhotoFormat;
use Illuminate\Database\Seeder;

class Photo_FormatsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Vaciar la tabla.
        PhotoFormat::truncate();

        $faker = \Faker\Factory::create();
        // Crear categorías ficticias en la tabla
        for($i = 0; $i < 100; $i++) {
            PhotoFormat::create([
                'name' => $faker->word,
                'description' => $faker->sentence,
                'category_id' => $faker->numberBetween(1,6),
            ]);
        }

    }
}
