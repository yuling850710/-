export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  benefits: string[];
  recommendedPairings: string[];
  ingredients: string[];
  price: number;
  originalPrice?: number;
  image: string;
  volume: string;
  highlight: string;
}

export interface ComboDeal {
  id: string;
  name: string;
  category: 'single_bundle' | 'combo_set';
  itemsText: string;
  originalPrice: number;
  discountPrice: number;
  saveAmount: number;
  description: string;
  tag?: string;
  itemsIncluded: { productId: string; name: string; count: number }[];
}

export interface OrderItem {
  id: string;
  title: string;
  type: 'combo' | 'single';
  price: number;
  quantity: number;
  subtotal: number;
}

export interface CustomerOrder {
  orderId: string;
  createdAt: string;
  customerName: string;
  phone: string;
  pickupMethod: 'store' | 'delivery';
  address?: string;
  expectedDate?: string;
  paymentMethod: 'store_cash' | 'transfer' | 'cod';
  notes?: string;
  items: OrderItem[];
  totalAmount: number;
  totalSaved: number;
  status: 'pending_sms' | 'preparing' | 'ready_for_pickup' | 'shipped';
}
