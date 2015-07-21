<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateChildDedicationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ch_child_dedication', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('member_id');
            $table->date('dedication_date');
            $table->string('pastor');
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
        Schema::drop('ch_child_dedication');
    }
}
