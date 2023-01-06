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
            'email' => 'string|required',
            'password' => 'string|required',
        ];
    }

    public function messages()
    {
        return [
            'email.required' => 'Поле емайл не заполнено',
            'email.string' => 'Поле емайл должно быть строкой',
            'password.required' => 'Поле пароль не заполнено',
            'password.string' => 'Поле пароль должно быть строкой',
        ];
    }
}
