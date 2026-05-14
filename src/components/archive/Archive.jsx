import { PROJECT_ITEMS } from '../../data/archive.js'
import ArchiveItem from './ArchiveItem.jsx'

export default function Archive() {
  return (
    <main>
      <header className="projects-header">
        <h1 className="projects-title">
          Project <span>Inventory</span>
        </h1>
      </header>

      <section className="projects-grid">
        {PROJECT_ITEMS.map((item) => (
          <ArchiveItem key={item.id} item={item} />
        ))}
      </section>
    </main>
  )
}
