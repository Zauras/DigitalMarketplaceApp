Asgard Marketplace - single page webapp

Frontend: React
	Most of the logic you will find in ReactApp/src/features and /api folders

Backend: .NET Core 3
	Layers: 
		Controllers
		Services
		Data access:
			UnitOfWork
			Repositories


How to run it:
	1) cd to ./AsgardMarketplace/ReactApp -> run in terminal "npm install" (or probably IDE you do it for you)

	2) With IDE: run .sln file with IDE (JetBNrains Rider or Visual Studio) and build-run project

	2) Through terminal:
	 		cd to ./AsgardMarketplace
	 		dotnet restore
	 		dotnet run

	 Both Fronend UI and Server API reachable through - https://localhost:5001/
	 Swagger UI - https://localhost:5001/swagger/index.html


 Features:
	Marketplace:
	 	Order the Item
	 		With payment
	 		Without payment - if not paid in 2 hours, order going to be cancelled

	Item List:
		Review your Items in Marketplace
		Review your Items in Orders
			Ship Item if buyer Sent a Payment

	Order List:
		Review your order history
		Pay for booked Items
		

!NOTE: For demo purposes USER is both seller and buyer (can buy from himself).


