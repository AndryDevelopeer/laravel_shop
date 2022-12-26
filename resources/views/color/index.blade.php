@extends('layouts.main')

@section('bread-title')
    <h1 class="m-0">Цвета</h1>
@endsection

@section('bread-chain')
    <li class="breadcrumb-item"><a href="{{route('admin.index')}}">Главная</a></li>
    <li class="breadcrumb-item active">Цвета</li>
@endsection

@section('content')
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <a class="btn btn-primary" href="{{route('color.create')}}">Добавить</a>
                        </div>
                        <div class="card-body table-responsive p-0">
                            <table class="table table-hover text-nowrap">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Наименование</th>
                                    <th>Код цвета</th>
                                    <th>Цвет</th>
                                    <th>Редактировать</th>
                                    <th>Удалить</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($colors as $color)
                                    <tr>
                                        <td>{{$color->id}}</td>
                                        <td>{{$color->name}}</td>
                                        <td>{{$color->code}}</td>
                                        <td>
                                            <p style="width: 20px; height: 20px; border-radius: 10px; background: {{$color->code}}"></p>
                                        </td>
                                        <td>
                                            <a class="btn btn-info btn-sm"
                                               href="{{route('color.edit', $color->id)}}">
                                                <i class="fas fa-pencil-alt"></i>
                                                Edit
                                            </a>
                                        </td>
                                        <td>
                                            <form action="{{route('color.delete', $color->id)}}" method="post">
                                                @csrf
                                                @method('delete')
                                                <button class="btn btn-danger btn-sm" type="submit">
                                                    <i class="fas fa-trash">
                                                    </i>
                                                    Delete
                                                </button>
                                            </form>
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="d-flex justify-content-center">{{ $colors->links() }}</div>
@endsection
