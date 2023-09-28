import HomePage from '@/components/homepage_lp/homepage'
export default function Example({search}) {
  return (
    <div>
    <header>
      <title>AlgoMaster - Learning Platform</title>
    </header>
      <HomePage search={search}/>
    </div>
  )
}

