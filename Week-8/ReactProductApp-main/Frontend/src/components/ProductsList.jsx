import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('title');

  const navigate = useNavigate();

  const gotoProducts = (product) => {
    navigate('/product', { state: { product } });
  };

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (res.status === 200) {
          const productsData = await res.json();
          setProducts(productsData);
        } else {
          throw new Error('Failed to fetch');
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  if (loading) {
    return (
      <p className="text-center text-lg sm:text-xl md:text-2xl text-blue-500 mt-10">
        Loading...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center text-lg sm:text-xl md:text-2xl text-red-500 mt-10 px-4">
        {error.message}
      </p>
    );
  }

  const filteredProducts = products.filter((product) => {
    if (filterType === 'title') {
      return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    }

    if (filterType === 'category') {
      return product.category.toLowerCase().includes(searchTerm.toLowerCase());
    }

    if (filterType === 'price') {
      return product.price.toString().includes(searchTerm);
    }

    return true;
  });

  return (
    <div className="min-h-screen from-gray-100 to-gray-200 py-8 sm:py-10 md:py-12">
      {/* Search Section */}
      <div className="px-4 sm:px-6 lg:px-10">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-4 sm:p-6 md:p-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
            Our Products
          </h1>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="w-full md:w-auto px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="title">Search by Title</option>
              <option value="category">Search by Category</option>
              <option value="price">Search by Price</option>
            </select>

            <input
              type="text"
              placeholder={`Enter ${filterType}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-80 lg:w-96 px-4 sm:px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Result Section */}
      {filteredProducts.length === 0 ? (
        <p className="text-center text-xl sm:text-2xl text-red-500 mt-10">
          No Results Found
        </p>
      ) : (
        <div className="max-w-7xl mx-auto mt-10 sm:mt-12 px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <div
                onClick={() => gotoProducts(product)}
                key={product.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer overflow-hidden border border-gray-100"
              >
                <div className="bg-gray-50 p-4 sm:p-6 flex justify-center items-center h-56">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-28 h-28 sm:w-32 sm:h-32 object-contain"
                  />
                </div>

                <div className="p-4 sm:p-5 text-center">
                  <h2 className="text-sm sm:text-base font-semibold text-gray-800 line-clamp-2 ">
                    {product.title}
                  </h2>

                  <p className="text-gray-500 capitalize text-sm sm:text-base mt-2">
                    {product.category}
                  </p>

                  <p className="text-blue-600 font-bold text-2xl sm:text-3xl mt-3">
                    ${product.price}
                  </p>

                  <button className="mt-4 w-full bg-blue-600 text-white py-2.5 rounded-xl hover:bg-blue-700 transition">
                    View Product
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsList;