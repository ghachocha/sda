<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateChMemberTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ch_member', function (Blueprint $table) {
            $table->increments('id');
            $table->string('first_name',50);
            $table->string('middle_name',50);
            $table->string('last_name',50);
            $table->char('gender',1);
            $table->integer('membership_id');
            $table->string('physical_address');
            $table->string('image_name');
            $table->string('image_size',50);
            $table->string('image_extension',50);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('ch_member');
    }
}
