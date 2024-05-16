import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Req,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { GUARDS } from '../auth/guards';
import { TUserReq, TWishlist } from '../utils/types';

import { WishlistsService } from './wishlists.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';

@ApiTags('Wishlists')
@ApiBearerAuth()
@UseGuards(GUARDS.jwtAuth)
@Controller('wishlistlists')
export class WishlistsController {
  constructor(private readonly wishlistsService: WishlistsService) {}

  @Post()
  async createWishlist(
    @Body() dto: CreateWishlistDto,
    @Req() { user }: TUserReq,
  ): Promise<TWishlist> {
    const wishlist = await this.wishlistsService.createWishlist(dto, user.id);
    return wishlist;
  }

  @Get()
  async getWishlists(@Req() { user }: TUserReq): Promise<TWishlist[]> {
    const wishlists = await this.wishlistsService.getWishlists(user.id);
    return wishlists;
  }

  @Get(':id')
  async getWishlist(
    @Param('id') id: string,
    @Req() { user }: TUserReq,
  ): Promise<TWishlist> {
    const wishlist = await this.wishlistsService.getWishlist(id, user.id);
    return wishlist;
  }

  @Patch(':id')
  async updateWishlists(
    @Param('id') id: string,
    @Body() dto: UpdateWishlistDto,
    @Req() { user }: TUserReq,
  ): Promise<TWishlist> {
    const wishlist = await this.wishlistsService.updateWishlists(
      id,
      dto,
      user.id,
    );
    return wishlist;
  }

  @Delete(':id')
  async removeWishlists(
    @Param('id') id: string,
    @Req() { user }: TUserReq,
  ): Promise<TWishlist> {
    const wishlist = await this.wishlistsService.removeWishlists(id, user.id);
    return wishlist;
  }
}
