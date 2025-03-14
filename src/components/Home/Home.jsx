import { NavLink, Outlet } from 'react-router-dom';

const Home = () => {
  const categories = [
    { name: 'All', path: '' },
    { name: 'Beef', path: 'beef' },
    { name: 'Breakfast', path: 'breakfast' },
    { name: 'Chicken', path: 'chicken' },
    { name: 'Dessert', path: 'dessert' },
    { name: 'Goat', path: 'goat' },
    { name: 'Lamb', path: 'lamb' },
    { name: 'Miscellaneous', path: 'miscellaneous' },
    { name: 'Pasta', path: 'pasta' },
    { name: 'Pork', path: 'pork' },
    { name: 'Seafood', path: 'seafood' },
    { name: 'Side', path: 'side' },
    { name: 'Starter', path: 'starter' },
    { name: 'Vegan', path: 'vegan' },
    { name: 'Vegetarian', path: 'vegetarian' },
  ];

  return (
    <div className="ml-64 bg-[#f4f2ee]">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-[#f19525]   via-[#ca1023c4] to-[#d8504b]  bg-clip-text text-transparent pacifico-regular p-5">Learn, Cook, Eat Your Food</h1>
      <ul className="sm:flex hidden mt-8 flex-wrap gap-4 font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {categories.map((category) => (
          <li className="me-2" key={category.name}>
            <NavLink
              className={({ isActive }) =>
                `inline-block px-4 py-2 catLink border-gray-400 border transition-all hover:shadow-xl shadow duration-300 rounded-full hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 ${
                  isActive ? 'bg-black text-gray-300' : ''
                }`
              }
              to={category.path}
              data-discover="true"
              end={category.path === ''}
            >
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Home;