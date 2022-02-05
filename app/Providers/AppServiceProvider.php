<?php

namespace App\Providers;

use Godruoyi\Snowflake\Snowflake;
use Godruoyi\Snowflake\LaravelSequenceResolver;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //雪花算法
		
		$this->app->singleton('snowflake', function () {
            return (new Snowflake(env('SNOWFLAKE_DATA_CENTER_ID'),env('SNOWFLAKE_WORKER_ID')))
                ->setStartTimeStamp(strtotime(config('database.snowflake.start'))*1000)
                ->setSequenceResolver(
                    new LaravelSequenceResolver($this->app->get('cache')->store()
                ));
        });
		
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
