import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Root')
@Controller()
export class AppController {
  @Get()
  @ApiOperation({ summary: 'API Root', description: 'Returns a welcome message for Chamber.fm API.' })
  getRoot(): string {
    return 'Welcome to the Chamber.fm API server!';
  }
}
