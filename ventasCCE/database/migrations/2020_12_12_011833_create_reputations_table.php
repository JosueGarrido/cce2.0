<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReputationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reputations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->tinyInteger('score');
            $table->string('comment');
            $table->timestamps();
        });

        Schema::table('reputations', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('restrict');
        });

        Schema::table('reputations', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id_2')->nullable();
            $table->foreign('user_id_2')->references('id')->on('users')->onDelete('restrict');
        });
    }
    public function down(){
        Schema::disableForeignKeyConstraints();
        Schema::table('reputations', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
            $table->dropForeign(['user_id_2']);
        });
        Schema::dropIfExists('reputations');
        Schema::enableForeignKeyConstraints();
    }
}
