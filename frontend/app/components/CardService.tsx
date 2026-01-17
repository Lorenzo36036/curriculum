import React from "react";

interface Props {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  price: string;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features,
  price,
}: Props) => (
  <div className="relative bg-white p-6 border border-gray-100 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex flex-col">
    <div className="flex items-start mb-4">
      <div className="-top-5 -left-6 absolute p-4 bg-blue-500/10 rounded-lg mr-4">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
    </div>

    <ul className="grow space-y-2 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-700 text-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 shrink-0"></span>
          {feature}
        </li>
      ))}
    </ul>

    {/* Precio */}
    <p className="text-lg font-bold text-blue-600 self-end mt-auto">{price}</p>
  </div>
);
export default ServiceCard;
