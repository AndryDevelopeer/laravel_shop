<?php

namespace App\Http\Requests\API\Auth;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => 'string|required|max:1024',
            'password' => 'string|required|max:255',
        ];
    }

    public function messages()
    {
        return [
            'email.required' => 'Поле емайл не заполнено',
            'email.string' => 'Поле емайл должно быть строкой',
            'email.max' => 'Не допустимая длинна емайл',
            'password.required' => 'Поле пароль не заполнено',
            'password.string' => 'Поле пароль должно быть строкой',
            'password.max' => 'Не допустимая длинна пароля',
        ];
    }
}
