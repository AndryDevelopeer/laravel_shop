@extends('layouts.main')
@section('bread-title')
    <h1 class="m-0">Категория</h1>
@endsection
@section('bread-chain')
    <li class="breadcrumb-item"><a href="{{route('admin.index')}}">Главная</a></li>
    <li class="breadcrumb-item">Категории</li>
    <li class="breadcrumb-item active">Категория</li>
@endsection
@section('content')
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <table class="table table-hover text-nowrap">
                    <tbody>
                    <tr>
                        <td>ID</td>
                        <td>{{$category->id}}</td>
                    </tr>
                    <tr>
                        <td>Наименование</td>
                        <td>{{$category->title}}</td>
                    </tr>
                    <tr>
                        <td>Описание</td>
                        <td>{{$category->description}}</td>
                    </tr>
                    <tr>
                        <td>Дата создания</td>
                        <td>{{$category->created_at}}</td>
                    </tr>
                    <tr>
                        <td>Дата обновления</td>
                        <td>{{$category->updated_at}}</td>
                    </tr>
                    <tr>
                        <td>Активность</td>
                        <td><span class="tag tag-success">{{$category->active}}</span></td>
                    </tr>
                    </tbody>
                </table>
                <div class="col-4 d-flex">
                    <a class="btn btn-info mr-2"
                       href="{{route('category.edit', $category->id)}}">
                        Редактировать
                    </a>
                    <form action="{{route('category.delete', $category->id)}}" method="post">
                        @csrf
                        @method('delete')
                        <button class="btn btn-danger mr-1" type="submit">
                            Удалить
                        </button>
                        <a href="{{route('category.index')}}" class="btn btn-secondary">Отмена</a>
                    </form>
                </div>
            </div>
        </div>
    </section>
@endsection