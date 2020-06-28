#nullable enable
using System;

using AsgardMarketplace.Controllers.ApiDto;
using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DataModels;
using AsgardMarketplace.Services.DomainModels.Abstractions;

namespace AsgardMarketplace.Services.DomainModels
{
    public class OrderModel : OrderModelBase
    {
        public UserModel? Recipient { get; set; }
        public MarketplaceItemModel Item { get; set; }
        
        public OrderModel(
            int id,
            OrderStatusModel status,
            DateTime orderTime,
            MarketplaceItemModel itemId,
            UserModel? recipient
        ) : base(id, status, orderTime)
        {
            Recipient = recipient;
            Item = itemId;
        }
        
        public static OrderDto ToApiDto(OrderModel model) =>
            new OrderDto
            {
                Id = model.Id,
                Status = model.Status.ToApiDto(),
                OrderTime = model.OrderTime,
                Item = model.Item.ToApiDto(),
                Recipient = model.Recipient?.ToApiDto()
            };
        
        public OrderDto ToApiDto() =>
            new OrderDto
            {
                Id = Id,
                Status = Status.ToApiDto(),
                OrderTime = OrderTime,
                Item = Item.ToApiDto(),
                Recipient = Recipient?.ToApiDto()
            };
        
        //
        // public static OrderEntity ToEntity(OrderModel model) =>
        //     new OrderEntity
        //     {
        //         Id = model.Id,
        //         SellerId = model.SellerId,
        //         BuyerId = model.BuyerId,
        //         ItemId = model.ItemId,
        //         StatusId = model.StatusId,
        //         OrderTime = model.OrderTime
        //     };
        //
        //
        // public static OrderModel ToDomainModel(OrderDto dto) =>
        //     new OrderModel(dto.Id, dto.SellerId, dto.BuyerId, dto.ItemId, dto.StatusId, dto.OrderTime);
        //
        // public static OrderModel ToDomainModel(OrderEntity entity) =>
        //     new OrderModel(entity.Id, entity.SellerId, entity.BuyerId, entity.ItemId, entity.StatusId, entity.OrderTime);
        

    }
}