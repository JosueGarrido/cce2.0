<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        //$this->call(UsersTableSeeder::class);
        $this->call(CulturalProyectsTableSeeder::class);
        $this->call(RecognitionsTableSeeder::class);
        $this->call(SalesTableSeeder::class);
        $this->call(WebLinksTableSeeder::class);
        $this->call(TrayectoryTableSeeder::class);
        $this->call(Category1TableSeeder::class);
        $this->call(Category2TableSeeder::class);
        $this->call(Category3TableSeeder::class);
        $this->call(Category4TableSeeder::class);
        //$this->call(ProductTableSeeder::class);
        $this->call(QuestionsTableSeeder::class);
        $this->call(AnswersTableSeeder::class);
        $this->call(ReputationTableSeeder::class);
        $this->call(Audio_Video_FormatsTableSeeder::class);
        $this->call(Photo_FormatsTableSeeder::class);
        Schema::enableForeignKeyConstraints();
    }
}
