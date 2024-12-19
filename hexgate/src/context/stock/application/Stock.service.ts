import { Injectable } from "@nestjs/common";
import { StockRepository } from "../domain/stocks.repository";
import { StockPaginationDTO } from "./DTO/Pagination.DTO";
import { UpdateStockDTO } from "./DTO/updateStock.dto";


@Injectable()
export class StockSerice{
    constructor(private readonly stockRepository: StockRepository){}

    async getStocks(dto: StockPaginationDTO){
       return  this.stockRepository.getStocks(dto.amount, dto.lastId);
    }

    async getStockById(id: string){
        return this.stockRepository.getById(id)
    }
}