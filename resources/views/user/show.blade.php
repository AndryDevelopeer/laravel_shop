@extends('layouts.main')

@section('bread-title')
    <h1 class="m-0">Пользователь</h1>
@endsection

@section('bread-chain')
    <li class="breadcrumb-item"><a href="{{route('admin.index')}}">Главная</a></li>
    <li class="breadcrumb-item" href="{{route('user.index')}}">Пользователи</li>
    <li class="breadcrumb-item active">Пользователь</li>
@endsection

@section('content')
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <table class="table table-hover text-nowrap">
                    <tbody>
                    <tr>
                        <td>ID</td>
                        <td>{{$user->id}}</td>
                    </tr>
                    <tr>
                        <td>Имя</td>
                        <td>{{$user->name}}</td>
                    </tr>
                    <tr>
                        <td>Телефон</td>
                        <td>{{$user->phone}}</td>
                    </tr>
                    <tr>
                        <td>Емаил</td>
                        <td>{{$user->email}}</td>
                    </tr>
                    <tr>
                        <td>Пароль</td>
                        <td>{{$user->password ? '****' : ''}}</td>
                    </tr>
                    <tr>
                        <td>Роль</td>
                        <td>{{$user->role->name}}</td>
                    </tr>
                    <tr>
                        <td>Пол</td>
                        <td>{{$user->gender}}</td>
                    </tr>
                    <tr>
                        <td>Возраст</td>
                        <td>{{$user->age}}</td>
                    </tr>
                    <tr>
                        <td>Адрес</td>
                        <td>{{$user->address}}</td>
                    </tr>
                    <tr>
                        <td>Время создания</td>
                        <td>{{$user->created_at}}</td>
                    </tr>
                    <tr>
                        <td>Время обновления</td>
                        <td>{{$user->updated_at}}</td>
                    </tr>
                    </tbody>
                </table>
                <div class="col-4 d-flex">
                    <a class="btn btn-info mr-2"
                       href="{{route('user.edit', $user->id)}}">
                        Редактировать
                    </a>
                    <form action="{{route('user.delete', $user->id)}}" method="post">
                        @csrf
                        @method('delete')
                        <button class="btn btn-danger mr-2" type="submit">
                            Удалить
                        </button>
                    </form>
                    <a href="{{route('user.index')}}" class="btn btn-secondary">Отмена</a>
                </div>
            </div>
        </div>
    </section>
@endsection
