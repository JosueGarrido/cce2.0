<?php

use App\Trajectory;
use Illuminate\Database\Seeder;
use Tymon\JWTAuth\Facades\JWTAuth;

class TrayectoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Vaciar la tabla.
        Trajectory::truncate();

        $faker = \Faker\Factory::create();
        // Obtenemos la lista de todos los usuarios creados e
        // iteramos sobre cada uno y simulamos un inicio de
        // sesión con cada uno para crear productos en su nombre
        $users = App\User::all();
        foreach ($users as $user) {
            // iniciamos sesión con este usuario
            JWTAuth::attempt(['email' => $user->email, 'password' => '123456']);
            // Y ahora con este usuario creamos algunos productos
            $num_trajectories = 2;
            for ($j = 0; $j < $num_trajectories; $j++) {
                Trajectory::create([
                    'start_date' => $faker->date,
                    'trajectory_description' => $faker->sentence,
                ]);
            }
        }
    }
}
