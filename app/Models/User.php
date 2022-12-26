<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $table = 'users';
    protected $guarded = false;

    private const FIELDS = [
        'name' => ['title' => 'Имя', 'type' => 'text'],
        'phone' => ['title' => 'Телефон', 'type' => 'text'],
        'email' => ['title' => 'Емайл', 'type' => 'text'],
        'password' => ['title' => 'Пароль', 'type' => 'text'],
        'password_confirmation' => ['title' => 'Подтверждение пароля', 'type' => 'text'],
        'gender' => ['title' => 'Пол', 'type' => 'select', 'options' => ['male' => 'муж.', 'female' => 'жен.']],
        'age' => ['title' => 'Возраст', 'type' => 'text'],
        'address' => ['title' => 'Адрес', 'type' => 'text'],
    ];

    public static function getFields()
    {
        return self::FIELDS;
    }
}
