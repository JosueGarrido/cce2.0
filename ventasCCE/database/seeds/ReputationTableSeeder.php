<?php

use App\Reputation;
use Illuminate\Database\Seeder;
use Tymon\JWTAuth\Facades\JWTAuth;

class ReputationTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Vaciar la tabla.
        Reputation::truncate();

        $faker = \Faker\Factory::create();
        // Obtenemos la lista de todos los usuarios creados e
        // iteramos sobre cada uno y simulamos un inicio de
        // sesión con cada uno para crear productos en su nombre
        $users = App\User::all();

        foreach ($users as $user) {
            // iniciamos sesión con cada uno
            JWTAuth::attempt(['email' => $user->email, 'password' => '123456']);

            // Creamos un comentario para cada artículo con este usuario
            foreach ($users as $user) {
                Reputation::create([
                    'score' => $faker->numberBetween(1,5),
                    'comment' => $faker->sentence,
                    'user_id_2' => $user->id,
                ]);
            }
        }
    }
}
