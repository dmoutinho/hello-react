import { useAppStore } from '../store/useAppStore'
import { usePosts } from '../hooks/usePosts'

function Home() {
  const { count, increment, decrement, reset } = useAppStore()
  const { data: posts, isLoading, isError } = usePosts()

  return (
    <div className="page">
      <section className="card">
        <h2>Contador (Zustand)</h2>
        <p className="counter">{count}</p>
        <div className="actions">
          <button onClick={decrement}>-</button>
          <button onClick={reset}>Reset</button>
          <button onClick={increment}>+</button>
        </div>
      </section>

      <section className="card">
        <h2>Posts (React Query)</h2>
        {isLoading && <p>Carregando...</p>}
        {isError && <p>Erro ao carregar posts.</p>}
        {posts?.map((post) => (
          <article key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </article>
        ))}
      </section>
    </div>
  )
}

export default Home
