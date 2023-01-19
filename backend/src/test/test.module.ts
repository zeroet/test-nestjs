import { Module } from '@nestjs/common';
import { testResolver } from './test.resolver';

@Module({
    providers: [testResolver],
})
export class TestModule {}
