using System;

namespace AsgardMarketplace.Services.DomainModels.Abstractions
{
    public abstract class OrderModelBase
    {
        // public static OrderDto ToApiDto(OrderModel model) =>
        //     new OrderDto
        //     {
        //         Id = model.Id,
        //         StatusId = model.StatusId,
        //         OrderTime = model.OrderTime
        //     };
        //
        // public static OrderEntity ToEntity(OrderModel model) =>
        //     new OrderEntity
        //     {
        //         Id = model.Id,
        //         StatusId = model.StatusId,
        //         OrderTime = model.OrderTime
        //     };
        //
        //
        // public static OrderModel ToDomainModel(OrderDto dto) =>
        //     new OrderModel(dto.Id,dto.StatusId, dto.OrderTime);
        //
        // public static OrderModel ToDomainModel(OrderEntity entity) =>
        //     new OrderModel(entity.Id, entity.StatusId, entity.OrderTime);

        protected OrderModelBase(int id, OrderStatusModel status, DateTime orderTime)
        {
            Id = id;
            Status = status;
            OrderTime = orderTime;
        }
        
        public int Id { get; set; }
        
        public OrderStatusModel Status { get; set; }
        
        public DateTime OrderTime { get; set; }
    }
}
