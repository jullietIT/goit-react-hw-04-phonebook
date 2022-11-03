import { useState } from 'react';

export default function ContactEditor() {
  const [name, setNames] = useState([]);
  // const [filter, setFilters] = useState('');

  const handleChange = event => {
    setNames(event.currentTarget.value.toLowerCase);
  };

  const handleSubmit = event => {
    setNames(event.preventDefolt());
  };
  return (
    <form onSubmit={handleSubmit}>
      <textarea value={name} onChange={handleChange}></textarea>

      <button tupe="submit">Coздать</button>
    </form>
  );
}
