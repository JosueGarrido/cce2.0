<?php

use App\Cultural_Projects;
use Illuminate\Database\Seeder;
use Tymon\JWTAuth\Facades\JWTAuth;

class CulturalProyectsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Vaciar la tabla.
        Cultural_Projects::truncate();

        $faker = \Faker\Factory::create();
        // Obtenemos la lista de todos los usuarios creados e
        // iteramos sobre cada uno y simulamos un inicio de
        // sesión con cada uno para crear productos en su nombre
        $users = App\User::all();
        foreach ($users as $user) {
            // iniciamos sesión con este usuario
            JWTAuth::attempt(['email' => $user->email, 'password' => '123456']);
            // Y ahora con este usuario creamos algunos productos
            $num_cultural_projects = 5;
            for ($j = 0; $j < $num_cultural_projects; $j++) {
                Cultural_Projects::create([
                    'project_name'=> $faker->userName,
                    'project_description'=> $faker->sentence,
                    'project_type'=> $faker->word,
                    'project_place'=> $faker->locale,
                ]);
            }
        }
    }
}
