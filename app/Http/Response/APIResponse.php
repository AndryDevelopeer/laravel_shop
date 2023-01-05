<?php

namespace App\Http\Response;

use Psy\Util\Json;

class APIResponse
{
    public $data = null;
    public $success = false;
    public $errors = [];

    /**
     * @var string $error
     */
    public function addError(string $error): void
    {
        $this->errors[] = $error;
    }

    /**
     * @var $data mixed
     */
    public function setData($data): void
    {
        $this->data = $data;
    }

    public function hasErrors(): bool
    {
        return !empty($this->errors);
    }

    public function asJson(): string
    {
        return Json::encode($this);
    }
}
