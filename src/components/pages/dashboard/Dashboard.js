import React from "react";

const Dashboard = () => {
  const cardData = [
    {
      title: 'Total Users',
      value: 1054,
      bgColor: 'bg-blue-500',
    },
    {
      title: 'Total Products',
      value: 342,
      bgColor: 'bg-green-500',
    },
    {
      title: 'Total Sales',
      value: '$12,345',
      bgColor: 'bg-yellow-500',
    },
    {
      title: 'Total Customers',
      value: 432,
      bgColor: 'bg-red-500',
    },
  ];

  return (
      <>
      <div className="flex-1 p-6 overflow-auto">
      <h1 className="text-2xl pt-5     pl-5 pb-5 font-semibold">
            Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`p-6 text-white ${card.bgColor} rounded-lg shadow-lg`}
          >
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="text-2xl">{card.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Sales Overview</h2>
      {/* Example table for sales data */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2">Product</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Product 1</td>
              <td className="border px-4 py-2">Category 1</td>
              <td className="border px-4 py-2">$50</td>
              <td className="border px-4 py-2">10</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Product 2</td>
              <td class="border px-4 py-2">Category 2</td>
              <td className="border px-4 py-2">$30</td>
              <td className="border px-4 py-2">20</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </>
      )
};

export default Dashboard;
