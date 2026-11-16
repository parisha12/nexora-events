import { Search, MapPin } from 'lucide-react';
import { categories } from '../../constants/navigation';
export default function EventFilters({ filter, setFilter }) {
  return (
    <div className="filters">
      <label>
        <Search />
        <input
          placeholder="Search events, topics or hosts"
          value={filter.q}
          onChange={(e) => setFilter({ ...filter, q: e.target.value })}
        />
      </label>
      <label>
        <MapPin />
        <select
          value={filter.city}
          onChange={(e) => setFilter({ ...filter, city: e.target.value })}
        >
          <option>All cities</option>
          <option>New York</option>
          <option>London</option>
          <option>Berlin</option>
          <option>Singapore</option>
          <option>San Francisco</option>
        </select>
      </label>
      <div className="chips">
        {categories.map((c) => (
          <button
            className={filter.category === c ? 'active' : ''}
            onClick={() => setFilter({ ...filter, category: c })}
            key={c}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
