/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"
#import "JYCWindow.h"
#import "DYWindow.h"
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

#define kScreenWidth [[UIScreen mainScreen] bounds].size.width
#define kScreenHeight [[UIScreen mainScreen] bounds].size.height
@interface AppDelegate()
@property(nonatomic,strong)JYCWindow *jycWindow;
@property(nonatomic,strong)DYWindow *dyWindow;

@property(nonatomic,assign)BOOL hasIndex2;
@property(nonatomic,weak)UIViewController *root2ViewController;
@end
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
//   self.jycWindow = [[JYCWindow alloc]initWithFrame:CGRectMake(kScreenWidth-80, kScreenHeight-150, 50, 50) mainImageName:@"timg1.png" bgcolor:[UIColor lightGrayColor] animationColor:[UIColor purpleColor]];
// self.jycWindow = [[JYCWindow alloc] initWithFrame:CGRectMake(kScreenWidth-80, kScreenHeight-150, 50, 50) mainImageName:@"timg1.png" bgcolor:[UIColor lightGrayColor]];
  self.dyWindow = [[DYWindow alloc] initWithFrame:CGRectMake(-80, kScreenHeight-250, 200, 200)];
//  __weak typeof(self) weakSelf = self;
//  self.jycWindow.callService = ^{
//    if (!weakSelf.root2ViewController) {
//      NSURL *jsCodeLocation;
//
//      jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index2" fallbackResource:nil];
//
//      RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
//                                                          moduleName:@"githubApp"
//                                                   initialProperties:nil
//                                                       launchOptions:launchOptions];
//      rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
//
//      UIViewController *root2ViewController = [UIViewController new];
//      weakSelf.root2ViewController = root2ViewController;
//      root2ViewController.view = rootView;
//      [weakSelf.window.rootViewController presentViewController:root2ViewController animated:YES completion:nil];
//    }else {
//      [weakSelf.root2ViewController dismissViewControllerAnimated:YES completion:nil];
//    }
//
//  };
  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"githubApp"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  
  
  return YES;
}

@end
