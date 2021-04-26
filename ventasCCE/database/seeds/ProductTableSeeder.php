<?php

use App\Product;
use Illuminate\Database\Seeder;
use Tymon\JWTAuth\Facades\JWTAuth;

class ProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $sales = 0;
        //Vaciar la tabla.
        Product::truncate();

        $faker = \Faker\Factory::create();
        // Obtenemos la lista de todos los usuarios creados e
        // iteramos sobre cada uno y simulamos un inicio de
        // sesión con cada uno para crear productos en su nombre
        $users = App\User::all();
        foreach ($users as $user) {
            // iniciamos sesión con este usuario
            JWTAuth::attempt(['email' => $user->email, 'password' => '123456']);
            // Y ahora con este usuario creamos algunos productos
            $num_articles = 8;
            for ($j = 0; $j < $num_articles; $j++) {
                $image_name = $faker->image('public/storage/products', 400, 300, null, false);
                Product::create([
                    'name' => $faker->domainWord,
                    'description' => $faker->sentence,
                    'price' => $faker->randomFloat(2,1,10000),
                    'stock' => $faker->numberBetween(5,25),
                    'sales' => $faker->numberBetween(1,5),
                    'image' => 'products/' . $image_name,
                    'category_id' => $faker->numberBetween(1,6),
                    'category_id2' => $faker->numberBetween(1,58),
                    'category_id3' => $faker->numberBetween(1,2),
                    'category_id4' => $faker->numberBetween(1,2),
                ]);
            }
        }
    }
}
