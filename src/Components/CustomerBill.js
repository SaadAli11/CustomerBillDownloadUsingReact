import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import "./CustomerBill.css";

const CustomerBill = () => {
	//This useRef hook is used to handle which content is to be download or print
	const componentRef = useRef();
	return (
		<>
			{/* This ReactToPrint Component is used to download or print the required Content */}
			<ReactToPrint
				trigger={() => {
					return (
						<div className="text-right mt-5 mr-4">
							<button className="btn btn-primary">Download</button>
						</div>
					);
				}}
				content={() => componentRef.current}
			/>
			{/* Customer Bill Start */}
			{/* This code Represnt the Customer Bill */}
			<div className="container" ref={componentRef}>
				<div className="card">
					<div className="card-body">
						<div className="row my-2 mx-1 ">
							<div className="fontSize">
								<ul className="list-unstyled">
									<li>
										<i className="fa-solid fa-hashtag" />
										<span> ID: </span>#4895678
									</li>
									<li>
										<i className="fa-regular fa-calendar-days" />
										<span> Date: </span>Feb 25,2023
									</li>
									<li>
										<i className="fa-solid fa-money-bill-wave" />
										<span> Status: </span>
										<span className="badge bg-success">Paid</span>
									</li>
								</ul>
							</div>
							<table className="table table-striped ">
								<thead style={{ backgroundColor: "#84B0CA" }}>
									<tr>
										<th>#</th>
										<th>Description</th>
										<th>Qty</th>
										<th>Unit Price</th>
										<th>Amount</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th>1</th>
										<td>Plain Bread</td>
										<td>4</td>
										<td>$200</td>
										<td>$800</td>
									</tr>
									<tr>
										<th>2</th>
										<td>Coke</td>
										<td>1</td>
										<td>$10</td>
										<td>$10</td>
									</tr>
									<tr>
										<th>3</th>
										<td>Chicken</td>
										<td>2</td>
										<td>$300</td>
										<td>$300</td>
									</tr>
									<tr>
										<th>4</th>
										<td>Plain Bread</td>
										<td>4</td>
										<td>$200</td>
										<td>$800</td>
									</tr>
									<tr>
										<th>5</th>
										<td>Coke</td>
										<td>1</td>
										<td>$10</td>
										<td>$10</td>
									</tr>
									<tr>
										<th>6</th>
										<td>Chicken</td>
										<td>3</td>
										<td>$300</td>
										<td>$300</td>
									</tr>
									<tr>
										<th>7</th>
										<td>Plain Bread</td>
										<td>4</td>
										<td>$200</td>
										<td>$800</td>
									</tr>
									<tr>
										<th>8</th>
										<td>Coke</td>
										<td>1</td>
										<td>$10</td>
										<td>$10</td>
									</tr>
									<tr>
										<th>9</th>
										<td>Chicken</td>
										<td>4</td>
										<td>$300</td>
										<td>$300</td>
									</tr>
									<tr>
										<th>10</th>
										<td>Plain Bread</td>
										<td>4</td>
										<td>$200</td>
										<td>$800</td>
									</tr>
									<tr>
										<th>11</th>
										<td>Coke</td>
										<td>1</td>
										<td>$10</td>
										<td>$10</td>
									</tr>
									<tr>
										<th>12</th>
										<td>Chicken</td>
										<td>1</td>
										<td>$300</td>
										<td>$300</td>
									</tr>
									<tr>
										<th>13</th>
										<td>Plain Bread</td>
										<td>4</td>
										<td>$200</td>
										<td>$800</td>
									</tr>
									<tr>
										<th>14</th>
										<td>Coke</td>
										<td>1</td>
										<td>$10</td>
										<td>$10</td>
									</tr>
									<tr>
										<th>15</th>
										<td>Chicken</td>
										<td>2</td>
										<td>$300</td>
										<td>$300</td>
									</tr>
									<tr>
										<th>16</th>
										<td>Plain Bread</td>
										<td>4</td>
										<td>$200</td>
										<td>$800</td>
									</tr>
									<tr>
										<th>17</th>
										<td>Coke</td>
										<td>1</td>
										<td>$10</td>
										<td>$10</td>
									</tr>
									<tr>
										<th>18</th>
										<td>Chicken</td>
										<td>1</td>
										<td>$300</td>
										<td>$300</td>
									</tr>
									<tr>
										<th>19</th>
										<td>Plain Bread</td>
										<td>4</td>
										<td>$200</td>
										<td>$800</td>
									</tr>
									<tr>
										<th>20</th>
										<td>Coke</td>
										<td>1</td>
										<td>$10</td>
										<td>$10</td>
									</tr>
									<tr>
										<th>21</th>
										<td>Chicken</td>
										<td>5</td>
										<td>$300</td>
										<td>$300</td>
									</tr>
									<tr>
										<th>22</th>
										<td>Plain Bread</td>
										<td>4</td>
										<td>$200</td>
										<td>$800</td>
									</tr>
									<tr>
										<th>23</th>
										<td>Coke</td>
										<td>1</td>
										<td>$10</td>
										<td>$10</td>
									</tr>
									<tr>
										<th>24</th>
										<td>Chicken</td>
										<td>4</td>
										<td>$300</td>
										<td>$300</td>
									</tr>
									<tr>
										<th>25</th>
										<td>Plain Bread</td>
										<td>4</td>
										<td>$200</td>
										<td>$800</td>
									</tr>
									<tr>
										<th>26</th>
										<td>Coke</td>
										<td>1</td>
										<td>$10</td>
										<td>$10</td>
									</tr>
									<tr>
										<th>27</th>
										<td>Chicken</td>
										<td>3</td>
										<td>$300</td>
										<td>$300</td>
									</tr>
									<tr>
										<th>28</th>
										<td>Plain Bread</td>
										<td>4</td>
										<td>$200</td>
										<td>$800</td>
									</tr>
									<tr>
										<th>29</th>
										<td>Coke</td>
										<td>1</td>
										<td>$10</td>
										<td>$10</td>
									</tr>
									<tr>
										<th>30</th>
										<td>Chicken</td>
										<td>1</td>
										<td>$300</td>
										<td>$300</td>
									</tr>
									<tr>
										<th>31</th>
										<td>Plain Bread</td>
										<td>4</td>
										<td>$200</td>
										<td>$800</td>
									</tr>
									<tr>
										<th>32</th>
										<td>Coke</td>
										<td>1</td>
										<td>$10</td>
										<td>$10</td>
									</tr>
									<tr>
										<th>33</th>
										<td>Chicken</td>
										<td>5</td>
										<td>$300</td>
										<td>$300</td>
									</tr>
									<tr>
										<th>34</th>
										<td>Coke</td>
										<td>1</td>
										<td>$10</td>
										<td>$10</td>
									</tr>
									<tr>
										<th>35</th>
										<td>Chicken</td>
										<td>4</td>
										<td>$300</td>
										<td>$300</td>
									</tr>
									<tr>
										<th>36</th>
										<td>Plain Bread</td>
										<td>4</td>
										<td>$200</td>
										<td>$800</td>
									</tr>
									<tr>
										<th>37</th>
										<td>Coke</td>
										<td>1</td>
										<td>$10</td>
										<td>$10</td>
									</tr>
									<tr>
										<th>38</th>
										<td>Chicken</td>
										<td>3</td>
										<td>$300</td>
										<td>$300</td>
									</tr>
									<tr>
										<th>39</th>
										<td>Plain Bread</td>
										<td>4</td>
										<td>$200</td>
										<td>$800</td>
									</tr>
									<tr>
										<th>40</th>
										<td>Coke</td>
										<td>1</td>
										<td>$10</td>
										<td>$10</td>
									</tr>
									<tr>
										<th>41</th>
										<td>Chicken</td>
										<td>1</td>
										<td>$300</td>
										<td>$300</td>
									</tr>
									<tr>
										<th>42</th>
										<td>Plain Bread</td>
										<td>4</td>
										<td>$200</td>
										<td>$800</td>
									</tr>
									<tr>
										<th>43</th>
										<td>Coke</td>
										<td>1</td>
										<td>$10</td>
										<td>$10</td>
									</tr>
									<tr>
										<th>44</th>
										<td>Chicken</td>
										<td>5</td>
										<td>$300</td>
										<td>$300</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="fontSize" style={{ float: "right" }}>
							<ul className="list-unstyled ">
								<li>
									<i className="fa-sharp fa-solid fa-location-dot" /> Packages Mall Walton Road
								</li>

								<li>
									<i className="fas fa-phone" /> (042) 111 696 255
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			{/* Customer Bill End */}
		</>
	);
};

export default CustomerBill;
