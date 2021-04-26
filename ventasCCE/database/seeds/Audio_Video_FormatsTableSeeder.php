<?php

use App\AudioVideoFormat;
use Illuminate\Database\Seeder;

class Audio_Video_FormatsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Vaciar la tabla.
        AudioVideoFormat::truncate();

        $faker = \Faker\Factory::create();
        // Crear categorías ficticias en la tabla
        for($i = 0; $i < 100; $i++) {
            AudioVideoFormat::create([
                'name' => $faker->word,
                'description' => $faker->sentence,
                'category_id' => $faker->numberBetween(1,6),
            ]);
        }

    }
}
