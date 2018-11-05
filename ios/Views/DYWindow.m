//
//  DYWindow.m
//  githubApp
//
//  Created by 丁洋洋 on 2018/10/30.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "DYWindow.h"
#import "XXXRoundMenuButton.h"
#define kk_WIDTH self.frame.size.width
#define kk_HEIGHT self.frame.size.height

#define kScreenWidth [[UIScreen mainScreen] bounds].size.width
#define kScreenHeight [[UIScreen mainScreen] bounds].size.height

#define animateDuration 0.3       //位置改变动画时间
#define showDuration 0.1          //展开动画时间
#define statusChangeDuration  3.0    //状态改变时间
#define normalAlpha  1.0           //正常状态时背景alpha值
#define sleepAlpha  0.5           //隐藏到边缘时的背景alpha值
#define myBorderWidth 1.0         //外框宽度
#define marginWith  5             //间隔

#define WZFlashInnerCircleInitialRaius  20
@interface DYWindow()
@property(nonatomic,strong)XXXRoundMenuButton *roundMenu;
@property(nonatomic,strong)UITapGestureRecognizer *tap;
@property(nonatomic,assign)BOOL isCenterSeceted;

@end
@implementation DYWindow

- (instancetype)initWithFrame:(CGRect)frame

{
  if(self = [super initWithFrame:frame])
  {
    
    self.backgroundColor = [UIColor redColor];
    self.windowLevel = UIWindowLevelAlert + 1;
    self.rootViewController = [UIViewController new];
    [self makeKeyAndVisible];
    
    _roundMenu = [[XXXRoundMenuButton alloc] initWithFrame:(CGRect){0, 0,frame.size.width, frame.size.height}];
    
    [_roundMenu loadButtonWithIcons:@[
                                      [UIImage imageNamed:@"menu_collect"],
                                      [UIImage imageNamed:@"menu_share"],
                                      [UIImage imageNamed:@"menu_theme"]
                                      
                                      ] startDegree:0 layoutDegree:M_PI];
    __weak typeof(self)weakSelf = self;

    [_roundMenu setButtonClickBlock:^(NSInteger idx) {
      
      NSLog(@"button %@ clicked !",@(idx));
      weakSelf.isCenterSeceted = NO;
      [weakSelf click:nil];
    }];
    _roundMenu.centerClickBlock = ^(BOOL selected) {
      weakSelf.isCenterSeceted = selected;
      [weakSelf click:nil];
    };
    [_roundMenu setCenterIcon:[UIImage imageNamed:@"menu_home"]];
    [_roundMenu setCenterIconType:XXXIconTypeCustomImage];
    
    _roundMenu.tintColor = [UIColor whiteColor];
    
    _roundMenu.mainColor = [UIColor colorWithRed:0.9 green:0.9 blue:0.9 alpha:0.5];
    
    [self addSubview:_roundMenu];
//    _tap = [[UITapGestureRecognizer alloc]initWithTarget:self action:@selector(click:)];
//    [self addGestureRecognizer:_tap];
    
    
    [self performSelector:@selector(justbegin) withObject:nil afterDelay:statusChangeDuration];
    
  }
  return self;
}
- (void)justbegin{
  
  [self performSelector:@selector(changeStatus) withObject:nil afterDelay:statusChangeDuration];
  
  CGPoint panPoint = CGPointMake(-80, kScreenHeight-250);
  
}

//点击事件
- (void)click:(BOOL)seceted
{
  
  _roundMenu.alpha = normalAlpha;
  self.center = CGPointMake(30, self.center.y);
  
  if (!self.isCenterSeceted) {
    [self performSelector:@selector(changeStatus) withObject:nil afterDelay:statusChangeDuration];
  }
//  if (self.callService) {
//
//    self.callService();
//  }
  
  
  
}

- (void)changeStatus
{
  __weak typeof(self)weakSelf = self;
  [UIView animateWithDuration:1.0 animations:^{
    weakSelf.roundMenu.alpha = sleepAlpha;
  }];
  [UIView animateWithDuration:0.5 animations:^{
    CGFloat x = self.center.x < 20+kk_WIDTH/2 ? 0 :  self.center.x > kScreenWidth - 20 -kk_WIDTH/2 ? kScreenWidth : self.center.x;
    CGFloat y = self.center.y < 40 + kk_HEIGHT/2 ? 0 : self.center.y > kScreenHeight - 40 - kk_HEIGHT/2 ? kScreenHeight : self.center.y;
    
    if((x == 0 && y ==0) || (x == kScreenWidth && y == 0) || (x == 0 && y == kScreenHeight) || (x == kScreenWidth && y == kScreenHeight)){
      y = self.center.y;
    }

    self.center = CGPointMake(x, y);
  }];
}
-(BOOL)pointInside:(CGPoint)point withEvent:(UIEvent *)event{
  CGRect btnBounds = self.bounds;
  if (!self.isCenterSeceted) {
    CGFloat wh = 60;
     btnBounds = CGRectMake((btnBounds.size.width - wh) / 2, (btnBounds.size.height - wh) / 2, wh, wh);
  }
  return CGRectContainsPoint(btnBounds, point);
}
@end
