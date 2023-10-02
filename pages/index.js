import HomePage from '@/components/homepage/homepage'
export default function Example({search}) {
  return (
    <div>
    <header>
      <title>CodeWizardry</title>
    </header>
      <HomePage search={search}/>
    </div>
  )
}

