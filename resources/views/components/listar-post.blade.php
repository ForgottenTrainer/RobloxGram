<div>
    <!-- I begin to speak only when I am certain what I will say is not better left unsaid. - Cato the Younger -->
    
    @if($posts->count())
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            @foreach($posts as $post)
                <div class="">
                    <a href="{{ route('posts.show', ['post' => $post, 'user' => $post->user]) }}" class="">
                        <img class="rounded" src="uploads/{{ $post->imagen }}" alt="Imagen {{ $post->titulo }}">
                    </a>
                </div>
            @endforeach
        </div>
        <div class="my-10">
            {{ $posts->links('pagination::tailwind') }}
        </div>
    @else
        <p class="text-center font-bold text-blue-500 uppercase">Cielos viejos debes seguir a alguien para que puedas ver contenido en tu muro</p>
    @endif
</div>