@extends('layouts.app')

@section('content')
        <router-view :key="$route.path" />
@endsection