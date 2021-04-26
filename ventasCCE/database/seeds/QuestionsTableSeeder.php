<?php

use App\Questions;
use Illuminate\Database\Seeder;
use Tymon\JWTAuth\Facades\JWTAuth;

class QuestionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Vaciar la tabla.
        Questions::truncate();

        $faker = \Faker\Factory::create();
        // Obtenemos la lista de todos los usuarios creados e
        // iteramos sobre cada uno y simulamos un inicio de
        // sesión con cada uno para crear productos en su nombre
        $users = App\User::all();
        foreach ($users as $user) {
            // iniciamos sesión con este usuario
            JWTAuth::attempt(['email' => $user->email, 'password' => '123456']);
            // Y ahora con este usuario creamos algunos productos
            $num_questions = 10;
            for ($j = 0; $j < $num_questions; $j++) {
                Questions::create([
                    'question' => $faker->sentence,
                    'product_id' => $faker->numberBetween(1,55),
                ]);
            }
        }
    }
}
